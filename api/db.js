const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'calendar',
    password: 'test1234',
    database: 'calendar',
    connectionLimit: 5
});


module.exports = testDB = async () => {
    let connection;
    try {

        connection = await pool.getConnection();
        const rows = await connection.query("SELECT * FROM appointments");
        console.log(rows); //[ {val: 1}, meta: ... ]
        //const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
        //console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        if (connection) return connection.end();
    }
}

module.exports = InsertAppointment = async (parameters) => {
    let connection;
    let query = `
    INSERT INTO
        appointments
    SET
        name = ?,
        start_date = ?,
        start_time = ?,
        location = ?,
        region = ?,
        tasks = ?,
        domain = ?,
        access = ?,
        created_at = NOW(),
        updated_at = NOW()

    `;
    let query2 = `
    SELECT LAST_INSERT_ID() AS last_id
    `;
    let query3 = `
    INSERT INTO
        participants
    SET
        appointment_id = ?,
        name = ?,
        created_at = NOW(),
        updated_at = NOW()

    `;
    console.log('Insert');
    try {

        connection = await pool.getConnection();
        await connection.query('START TRANSACTION');
        await connection.query(query, [
            parameters.name,
            parameters.start_date,
            parameters.start_time,
            parameters.location,
            parameters.region,
            parameters.tasks,
            parameters.domain,
            parameters.access
        ]);
        const rowsLast = await connection.query(query2);
        parameters.participants.forEach(async function (element) {
            if (element !== '') {
                await connection.query(query3, [
                    rowsLast[0].last_id,
                    element
                ]);
            }
        });
        await connection.query('COMMIT');
    } catch (err) {
        console.log('Error');
        console.log(err);
        throw err;
    } finally {
        if (connection) return connection.end();
    }
}

module.exports = UpdateAppointment = async (id, parameters) => {
    let connection;
    let query = `
    UPDATE
        appointments
    SET
        name = ?,
        start_date = ?,
        start_time = ?,
        location = ?,
        region = ?,
        tasks = ?,
        domain = ?,
        access = ?,
        updated_at = NOW()
    WHERE
        id = ?

    `;
    let querySelectParticipants = `
    SELECT
        id, name
    FROM
        participants
    WHERE
        appointment_id = ?

    `;
    let queryDeleteParticipants = `
    DELETE FROM
        participants
    WHERE
        id = ?

    `;
    let queryInsertParticipant = `
    INSERT INTO
        participants
    SET
        appointment_id = ?,
        name = ?,
        created_at = NOW(),
        updated_at = NOW()

    `;
    console.log('Update');
    try {

        connection = await pool.getConnection();
        await connection.query(query, [
            parameters.name,
            parameters.start_date,
            parameters.start_time,
            parameters.location,
            parameters.region,
            parameters.tasks,
            parameters.domain,
            parameters.access,
            id
        ]);
        const participants = await connection.query(querySelectParticipants, [
            id
        ]);
        //console.log(participants);
        //Remove old participants
        participants.forEach(async (element) => {
            if (!parameters.participants.includes(element.name)) {
                //console.log(element);
                await connection.query(queryDeleteParticipants, [
                    element.id
                ]);
            }
        });
        //Add new participants
        parameters.participants.forEach(async (participant) => {
            if (participant !== '' && !participants.map(object => object.name).includes(participant)) {
                await connection.query(queryInsertParticipant, [
                    id,
                    participant
                ]);
            }
        });

    } catch (err) {
        console.log('Error');
        console.log(err);
        throw err;
    } finally {
        if (connection) return connection.end();
    }
}

module.exports = DeleteAppointment = async (id) => {
    let connection;
    let query = `
    DELETE FROM
        appointments
    WHERE
        id = ?
    `;
    try {

        connection = await pool.getConnection();
        const rows = await connection.query(query, [
            id
        ]);
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        if (connection) return connection.end();
    }
}

module.exports = SelectAppointments = async () => {
    let connection;
    let query = `
    SELECT
        appointments.*,
        GROUP_CONCAT(participants.name SEPARATOR ', ') AS participants_string
    FROM
        appointments LEFT OUTER JOIN
        participants ON appointments.id = participants.appointment_id
    GROUP BY
        appointments.id
    ORDER BY
        appointments.id
    `;
    try {
        connection = await pool.getConnection();
        var rows = await connection.query(query);
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        if (connection) connection.end();
    }
    return rows;
}
module.exports = SelectParticipants = async (id) => {
    let connection;
    let query = `
    SELECT
        id, name
    FROM
        participants
    WHERE
        appointment_id = ?
    `;
    try {
        connection = await pool.getConnection();
        var rows = await connection.query(query, [
            id
        ]);
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        if (connection) connection.end();
    }
    return rows;
}

module.exports = SelectAppointment = async (id) => {
    let connection;
    let query = `
    SELECT
        appointments.*,
        GROUP_CONCAT(participants.name SEPARATOR ', ') AS participants_string
    FROM
        appointments LEFT OUTER JOIN
        participants ON appointments.id = participants.appointment_id
    WHERE
        appointments.id = ?
    GROUP BY
        appointments.id
    ORDER BY
        appointments.id    
    `;
    try {
        connection = await pool.getConnection();
        var rows = await connection.query(query, [
            id
        ]);
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        if (connection) connection.end();
    }
    return rows;
}

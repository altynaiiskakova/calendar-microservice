USE calendar;
INSERT INTO appointments (
    name, start_date, start_time, location, region, tasks, domain, access, created_at, updated_at
) VALUES
(
    'Termin 1', '2021-08-01', '09:00', 'HU-Berlin', 'Berlin', 'Aufgabe 1', 'Test', 'FREE', NOW(), NOW()
);
INSERT INTO participants (
    appointment_id, name, created_at, updated_at
) VALUES
(
    LAST_INSERT_ID(), 'Name1', NOW(), NOW()
),
(
    LAST_INSERT_ID(), 'Name2', NOW(), NOW()
);

INSERT INTO appointments (
    name, start_date, start_time, location, region, tasks, domain, access, created_at, updated_at
) VALUES
(
    'Termin 2', '2021-08-02', '09:00', 'HU-Berlin', 'Berlin', 'Aufgabe 2', 'Test', 'FREE', NOW(), NOW()
);
INSERT INTO participants (
    appointment_id, name, created_at, updated_at
) VALUES
(
    LAST_INSERT_ID(), 'Name1', NOW(), NOW()
),
(
    LAST_INSERT_ID(), 'Name2', NOW(), NOW()
),
(
    LAST_INSERT_ID(), 'Name3', NOW(), NOW()
);

INSERT INTO appointments (
    name, start_date, start_time, location, region, tasks, domain, access, created_at, updated_at
) VALUES
(
    'Termin 3', '2021-08-03', '09:00', 'HU-Berlin', 'Berlin', 'Aufgabe 3', 'Test', 'FREE', NOW(), NOW()
);
INSERT INTO participants (
    appointment_id, name, created_at, updated_at
) VALUES
(
    LAST_INSERT_ID(), 'Name4', NOW(), NOW()
),
(
    LAST_INSERT_ID(), 'Name5', NOW(), NOW()
),
(
    LAST_INSERT_ID(), 'Name3', NOW(), NOW()
);

INSERT INTO appointments (
    name, start_date, start_time, location, region, tasks, domain, access, created_at, updated_at
) VALUES
(
    'Termin 4', '2021-08-04', '09:00', 'HU-Berlin', 'Berlin', 'Aufgabe 4', 'Test', 'FREE', NOW(), NOW()
);
INSERT INTO participants (
    appointment_id, name, created_at, updated_at
) VALUES
(
    LAST_INSERT_ID(), 'Name1', NOW(), NOW()
),
(
    LAST_INSERT_ID(), 'Name2', NOW(), NOW()
),
(
    LAST_INSERT_ID(), 'Name3', NOW(), NOW()
);

INSERT INTO appointments (
    name, start_date, start_time, location, region, tasks, domain, access, created_at, updated_at
) VALUES
(
    'Termin 5', '2021-08-05', '09:00', 'HU-Berlin', 'Berlin', 'Aufgabe 5', 'Test', 'FREE', NOW(), NOW()
);
INSERT INTO participants (
    appointment_id, name, created_at, updated_at
) VALUES
(
    LAST_INSERT_ID(), 'Name1', NOW(), NOW()
),
(
    LAST_INSERT_ID(), 'Name2', NOW(), NOW()
),
(
    LAST_INSERT_ID(), 'Name3', NOW(), NOW()
);

INSERT INTO appointments (
    name, start_date, start_time, location, region, tasks, domain, access, created_at, updated_at
) VALUES
(
    'Termin 6', '2021-08-06', '09:00', 'HU-Berlin', 'Berlin', 'Aufgabe 6', 'Test', 'FREE', NOW(), NOW()
);
INSERT INTO participants (
    appointment_id, name, created_at, updated_at
) VALUES
(
    LAST_INSERT_ID(), 'Name1', NOW(), NOW()
),
(
    LAST_INSERT_ID(), 'Name2', NOW(), NOW()
),
(
    LAST_INSERT_ID(), 'Name3', NOW(), NOW()
);

INSERT INTO appointments (
    name, start_date, start_time, location, region, tasks, domain, access, created_at, updated_at
) VALUES
(
    'Termin 7', '2021-08-07', '09:00', 'HU-Berlin', 'Berlin', 'Aufgabe 7', 'Test', 'FREE', NOW(), NOW()
);
INSERT INTO participants (
    appointment_id, name, created_at, updated_at
) VALUES
(
    LAST_INSERT_ID(), 'Name1', NOW(), NOW()
),
(
    LAST_INSERT_ID(), 'Name2', NOW(), NOW()
),
(
    LAST_INSERT_ID(), 'Name3', NOW(), NOW()
);

INSERT INTO appointments (
    name, start_date, start_time, location, region, tasks, domain, access, created_at, updated_at
) VALUES
(
    'Termin 8', '2021-08-08', '09:00', 'HU-Berlin', 'Berlin', 'Aufgabe 8', 'Test', 'FREE', NOW(), NOW()
);
INSERT INTO participants (
    appointment_id, name, created_at, updated_at
) VALUES
(
    LAST_INSERT_ID(), 'Name1', NOW(), NOW()
),
(
    LAST_INSERT_ID(), 'Name2', NOW(), NOW()
),
(
    LAST_INSERT_ID(), 'Name3', NOW(), NOW()
);

INSERT INTO appointments (
    name, start_date, start_time,location, region, tasks, domain, access, created_at, updated_at
) VALUES
(
    'Termin 9', '2021-08-09', '09:00', 'HU-Berlin', 'Berlin', 'Aufgabe 9', 'Test', 'FREE', NOW(), NOW()
);
INSERT INTO participants (
    appointment_id, name, created_at, updated_at
) VALUES
(
    LAST_INSERT_ID(), 'Name1', NOW(), NOW()
),
(
    LAST_INSERT_ID(), 'Name2', NOW(), NOW()
),
(
    LAST_INSERT_ID(), 'Name3', NOW(), NOW()
);

INSERT INTO appointments (
    name, start_date, start_time, location, region, tasks, domain, access, created_at, updated_at
) VALUES
(
    'Termin 10', '2021-08-10', '09:00', 'HU-Berlin', 'Berlin', 'Aufgabe 10', 'Test', 'FREE', NOW(), NOW()
);
INSERT INTO participants (
    appointment_id, name, created_at, updated_at
) VALUES
(
    LAST_INSERT_ID(), 'Name1', NOW(), NOW()
),
(
    LAST_INSERT_ID(), 'Name2', NOW(), NOW()
),
(
    LAST_INSERT_ID(), 'Name3', NOW(), NOW()
);
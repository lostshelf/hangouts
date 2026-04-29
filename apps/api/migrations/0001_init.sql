CREATE TABLE polls (
  id              TEXT PRIMARY KEY,
  organizer_id    TEXT NOT NULL,
  title           TEXT NOT NULL,
  description     TEXT,
  duration_hours  REAL NOT NULL,
  timezone        TEXT NOT NULL,
  deadline        INTEGER,
  created_at      INTEGER NOT NULL,
  finalized_slot  INTEGER
);

CREATE TABLE poll_dates (
  poll_id         TEXT NOT NULL,
  date            TEXT NOT NULL,
  earliest_hour   INTEGER NOT NULL,
  latest_hour     INTEGER NOT NULL,
  PRIMARY KEY (poll_id, date),
  FOREIGN KEY (poll_id) REFERENCES polls(id) ON DELETE CASCADE
);

CREATE TABLE invitees (
  id              TEXT PRIMARY KEY,
  poll_id         TEXT NOT NULL,
  name            TEXT NOT NULL,
  email           TEXT,
  user_id         TEXT,
  responded_at    INTEGER,
  reminded_at     INTEGER,
  FOREIGN KEY (poll_id) REFERENCES polls(id) ON DELETE CASCADE
);

CREATE INDEX idx_invitees_poll_id ON invitees(poll_id);

CREATE TABLE responses (
  invitee_id      TEXT NOT NULL,
  slot_start      INTEGER NOT NULL,
  status          INTEGER NOT NULL,
  PRIMARY KEY (invitee_id, slot_start),
  FOREIGN KEY (invitee_id) REFERENCES invitees(id) ON DELETE CASCADE
);

CREATE INDEX idx_responses_slot ON responses(slot_start);

CREATE TABLE users (
  id              TEXT PRIMARY KEY,
  display_name    TEXT,
  default_tz      TEXT,
  created_at      INTEGER NOT NULL
);

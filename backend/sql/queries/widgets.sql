-- name: CreateWidget :one
INSERT INTO widgets (id, created_at, updated_at, name, description)
VALUES (
        $1,
        $2,
        $3,
        $4,
        $5
    )
RETURNING *;
-- name: GetWidgets :many
SELECT *
FROM widgets;
package auth

import (
	"errors"
	"net/http"
	"strings"
)

// GetUsername extracts an username from the headers of an HTTP request
// Example:
// Authorization: Username {insert username here}
func GetUsername(headers http.Header) (string, error) {
	val := headers.Get("Authorization")

	if val == "" {
		return "", errors.New("no authentication info found")
	}

	vals := strings.Split(val, " ")
	if len(vals) != 2 {
		return "", errors.New("malformed auth header")
	}

	if vals[0] != "Username" {
		return "", errors.New("malformed first part of auth header")
	}

	return vals[1], nil
}

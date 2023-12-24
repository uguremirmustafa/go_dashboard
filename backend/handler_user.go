package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/google/uuid"
	"github.com/uguremirmustafa/go_dashboard/backend/internal/database"
)

func (apiCfg *apiConfig) handlerCreateUser(w http.ResponseWriter, r *http.Request) {

	type parameters struct {
		Username string `json:"username"`
	}

	decoder := json.NewDecoder(r.Body)

	params := parameters{}
	err := decoder.Decode(&params)
	if err != nil {
		respondWithError(w, 400, fmt.Sprintf("Error parsing JSON: %s", err))
		return
	}

	user, err := apiCfg.DB.CreateUser(r.Context(), database.CreateUserParams{
		ID:        uuid.New(),
		CreatedAt: time.Now().UTC(),
		UpdatedAt: time.Now().UTC(),
		Username:  params.Username,
	})

	if err != nil {
		respondWithError(w, 400, fmt.Sprintf("couldnt create user: %s", err))
		return
	}

	respondWithJSON(w, 201, dbUserToUser(user))
}

func (apiCfg *apiConfig) handlerGetUser(w http.ResponseWriter, r *http.Request, user database.User) {
	respondWithJSON(w, 200, dbUserToUser(user))
}

// func (apiCfg *apiConfig) handlerGetPostsForUser(w http.ResponseWriter, r *http.Request, user database.User) {
// 	posts, err := apiCfg.DB.GetPostsForUser(r.Context(), database.GetPostsForUserParams{
// 		UserID: user.ID,
// 		Limit:  10,
// 	})
// 	if err != nil {
// 		respondWithError(w, 400, fmt.Sprintf("Couldn't get posts: %v", err))
// 	}

// 	respondWithJSON(w, 200, databasePostsToPosts(posts))
// }
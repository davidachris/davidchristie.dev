package middleware

import (
	"davidchristie-dev/database"
	"net/http"

	"github.com/labstack/echo/v4"
)

func Auth(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		sessionId, err := c.Cookie("sessionId")
		if err != nil {
			// Unauthorized redirect to login page
			return c.Redirect(http.StatusTemporaryRedirect, "/login")
		}
		userId, err := database.GetUserSession(sessionId.Value)
		if err != nil {
			// Unauthorized redirect to login page
			return c.Redirect(http.StatusTemporaryRedirect, "/login")
		}
		c.Set("userId", userId)
		return next(c)
	}
}

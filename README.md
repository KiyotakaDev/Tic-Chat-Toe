# Tic-Chat-Toe
This is a web application using ReactJS (frontend), ExpressJS (backend), Socket.io (webSocket) MongoDB (DataBase).

## Conventions

|     Type     |                       Meaning                       |
| :----------: | :-------------------------------------------------: |
|   **feat**   |                    New features                     |
|   **fix**    |                      Bug fixes                      |
|    **!**     |                   Breaking change                   |
|  **build**   |            Changes in compilation system            |
|  **chore**   |  Changes that don't affect production environment   |
|    **ci**    | Changes in the continuous integration configuration |
|   **docs**   |              Changes in documentation               |
|   **perf**   |               Updates in performance                |
| **refactor** |                Refactoring processes                |
|  **revert**  |            Rollbacks to previous commit             |
|  **style**   |                  Changes in syntax                  |
|   **test**   |                  Add or fix tests                   |

## Status codes

|            Status             |                                       Meaning                                        |
| :---------------------------: | :----------------------------------------------------------------------------------: |
|          **200 OK**           |                                  Successful request                                  |
|      **204 No Content**       |   Reques succeeded. Response doesn't contain any content that should be displayed    |
|      **400 Bad Request**      |                     Syntax error or the server cannot procces it                     |
|     **401 Unauthorized**      | Client is not authorized to access. Valid authentication credentials may be required |
|       **403 Forbidden**       |     Client doesn't have sufficient permissions to access the requested resource      |
|       **404 Not Found**       |    Resource cannot be found on the server. (incorrect URL or a deleted resource)     |
|       **409 Conflict**        | Request couldn't be completed. Conflict with the current state of the target source  |
| **500 Internal Server Error** |      When something goes wrong on the server and it cannot complete the request      |

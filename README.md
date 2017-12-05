# bachimetro

# ¿Cómo utilizar las APIs REST y Streaming de Twitter?

1. Crear una app en [apps.twitter.com](apps.twitter.com)
[https://developer.twitter.com/en/docs/basics/authentication/overview/application-only](https://developer.twitter.com/en/docs/basics/authentication/overview/application-only)
2. Generar un token codificado en Base64:
    - Concatenar como `Consumer Key (API Key):Consumer Secret (API Secret)` en un solo string
    - Codificar el string concatenado en Base64 en [https://www.base64encode.org/](https://www.base64encode.org/)
3. Obtener un bearer token:
    - Hacer un request HTTP Post con el siguiente formato:
        URL :
            https://api.twitter.com/oauth2/token
        Headers:
            Content-Type    application/x-www-form-urlencoded
            Authorization   Basic <string concatenado en Base64>
        Body:
            grant_type      client_credentials
    - Copiar el bearer token del response:
        {
            "token_type": "bearer",
            "access_token": ""
        }
4. Hacer el request a la Search API de Twitter
    - Hacer un request HTTP Get con el siguiente formato:
        URL:
            https://api.twitter.com/1.1/search/tweets.json?q=%23bachimetro
        Headers:
            Authorization   Bearer <bearer token>
        

<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.png" alt="Markdownify" width="200"></a>
  <br>
  NTC forms
  <br>
</h1>

<h4 align="center"> Public web site and forms manager based on <a href="http://nextjs.org" target="_blank">Next.js</a>.</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#credits">Credits</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>

![screenshot](https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.gif)

## Key Features

* Public web site
* complete forms
* admin panel
  - manage forms
  - manage users

## How To Use

replace ==.env.example== with ==.env== and set the following variables:
 ```dosini
AUTH_GOOGLE_ID=secret
AUTH_GOOGLE_SECRET=secret
NEXTAUTH_SECRET=secret
MONGO_URI=mongodb://localhost:27017/ntc_forms
USER_EMAIL=sender@exemple.com
EMAIL_ACCESS=secret
```

> * AUTH_GOOGLE_ID: Google client id [get it here](https://developers.google.com/identity/oauth2/web/guides/get-google-api-clientid)
> * AUTH_GOOGLE_SECRET: Google client secret [get it here](https://developers.google.com/identity/oauth2/web/guides/get-google-api-clientid)
> * NEXTAUTH_SECRET: a random strong secret key
> * MONGO_URI: mongodb connection string
> * USER_EMAIL: email address to send emails
> * EMAIL_ACCESS: email password [get it here](docs/email.md)

## Development

### Prerequisites

- Node.js (>= v21.7.1)
- npm version (>= 10.5.0)
- mongodb

### Run
```bash
# Clone this repository
git clone https://github.com/samuel-poinama/ntc-forms.git

# Go into the repository
cd ntc-forms

# Install dependencies
npm install

# Run the app
npm run dev
```

## Deployment

### Prerequisites

- docker (>= 24.0.6)
- docker-compose (>= 2.23.0)

> set ==MONGO_URI== in ==.env== to ==mongodb://mongo:27017/ntc_forms==
> change ==ADMIN_EMAIL== in ==docker-compose.yml== to your email address

```bash
# Clone this repository
git clone https://github.com/samuel-poinama/ntc-forms.git

# Go into the repository
cd ntc-forms

# Build the app
docker-compose build

# Run the app
docker-compose up
```

## Credits

This software uses the following open source packages:

- [Node.js](https://nodejs.org/)
- [Next.js](https://nextjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Nodemailer](https://nodemailer.com/about/)
- [Docker](https://www.docker.com/)

---

> [samuel poinama (Linked In)](https://www.linkedin.com/in/samuel-poinama-428827222/)



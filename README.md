# PALAEMON-REGISTRATION

---

The "PALAEMON-REGISTRATION" microservice enables passengers and crew members to register with PaMEAS-A prior to embarking on the vessel, creating a profile with the system. Additionally, at the end of the registration process the users receive in a compatible mobile wallet app a [Verifiable Credential](https://www.w3.org/TR/vc-data-model/), the "PALAEMON-Identity-Card". Via this card they are next able to access on vessel services.

 In detail, via this service the users are first requried to authenticate using their national eID over the eIDAS Network. After authentication the passenger's and crew member's details are retrieved from the shipping companies IT systems. Additionally, the passenger and crew members are required to declare some additional information about themselves that will ensure their proper handling in cases of emergency evacuations (mobility issues, specific health issues, and so on). At the end of this process the passengers and crew members profile is created in the persistence layer of PALAEMON (Data Storage Facility). 
 
 Furthermore, the PALAEMON-REGISTRATION service acts as a [Self Sovreign Identity](https://www.frontiersin.org/articles/10.3389/fbloc.2021.616779/full) (SSI) Issuer. In this capacity the PALAEMON-REGISTRATION service generates a Verifiable Credential (VC) attesting to the attributes of the user (passenger or crew member) and enables the user to store it in a compatible SSI mobile wallet. This VC contains the full profile of the user and can be used to authenticate at any on vessel cyber-physical service (e.g. the [PALAEMON-EMBARKATION-REGISTRATION](https://github.com/uaegean-i4mLab/palaemon-registration-embarkation) service) ensuring the protection of the privacy of the user (access to their profile is only enabled via their explicit conset). As a result the PALAEMON-REGISTRATION service acts as a trust anchor for the system. 

 As a result, the PALAEMON-REGISTRATION service implements the necessary UIs and backend functionality to enable the creation of the passenger and crew member profiles, the issuance of the PPALAEMON-Identity-Card and the secure storage of it to the user's wallet apps. ew).


# Further Reading and Documentation

---
If you want to learn more about the "PALAEMON-REGISTRATION" microservice please read our
[PALAEMON People Management System and Storage Layer](https://docs.google.com/presentation/d/16W8H_h-qz2HTbRwcXpGJ9RnrYqZxCAZ8/edit#slide=id.g109536bd6dd_2_24). that provides an overview of this microservice as well as a demo scenario. 
To gain a better understanding of the overall functionality of PaMEAS the following presentations are
helpful:
- [PaMEAS Evacuation Messaging Policy](https://docs.google.com/presentation/d/1uxZ4Hoah89qz3MuUqt1RmGY8Dxf0upC6/edit?usp=sharing&ouid=101096721707031783382&rtpof=true&sd=true)
- [PaMEAS (and PALAEMON Pilots) ICT Integration](https://docs.google.com/presentation/d/1ni99nXpgV1XGvfo6XNaR3cbe4MRncCj3/edit?usp=sharing&ouid=101096721707031783382&rtpof=true&sd=true)
- [PaMEAS-A integration](https://docs.google.com/presentation/d/1cRt34HpJzM55kundaGE65re5CHmTzsvp/edit?usp=sharing&ouid=101096721707031783382&rtpof=true&sd=true)
- [PaMEAS-N and PaMEAS-Cell](https://docs.google.com/presentation/d/1xnB5cOLFCL9GC1_jkzBss-vrYs6-Vv5h/edit?usp=sharing&ouid=101096721707031783382&rtpof=true&sd=true)
- [PaMEAS-A Testing Scenarios](https://docs.google.com/presentation/d/178G2WV1pbgP8KswFuqrGacF0mGM67ERetdLD67w74MU/edit?usp=sharing)
- [PALAEMON People Management System and Storage Layer: Demo](https://docs.google.com/presentation/d/16W8H_h-qz2HTbRwcXpGJ9RnrYqZxCAZ8/edit?usp=sharing&ouid=101096721707031783382&rtpof=true&sd=true)

# Code

---

*Disclaimer: Although we tested the code extensively, the "PALAEMON-REGISTRATION" is a research
prototype that may contain bugs. We take no responsibility for and give no warranties in respect of using the code.*

## Layout

The "PALAEMON-EMBARKATION-REGISTRATION" microservice is implemented
via a Next.js application served over an Express server. This strategy allows us to maintain flexibility with respect to the definition of the backend endpoints that are required for the appropriate implementation of the required flows. Also, it allows for taking advantage of the advace features of Next.js such as SSR. As a result this microservice adheres to the typical Next.js structure:
- `public` contains the assets like images and css files
- `service` contains backend service functionality used for inversion control
- `page` contains  the front end routes of the system (views)
- `controlers` contains the backend server endpoints exposed by the Express server. 


# Deployment

---
The "PALAEMON-REGISTRATION" microservice is implemented via Next.js that is served over an Express server and is Dockerized in order to
facilitate its deployment. As a result this microservice can be easily deployed using:
```
docker run --nameendimion13/palaemon-registration:0.0.1f -p  5040:5000 -d 
```
Additionally, a typical Docker-compose file for its deployment would look as follows:
```
 
version: '2'
services:
 palaemon:
    image: endimion13/palaemon-registration:0.0.1f
    environment:
      NODE_ENV: "production"
      ENDPOINT: https://dss.aegean.gr/palaemon
      HTTPS_COOKIES: "false"
      REDIS: redis
      ISSUER_URL: https://dss1.aegean.gr/auth/realms/grnetEidas
      OIDC_REDIRECT_URI: http://localhost:5040/login/callback
      PORT: 5000
      DB_PROXY_URL: http://palaemon-db-proxy:8080
    ports:
      - 5040:5000


```




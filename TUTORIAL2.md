<!--* BASICS -------------------------------------------------------------------------------------------------------------------------------------------->
<!-- INSTALLATION :  -->
<!-- DOCKER HUB  -->
<!-- DOCKER LOGIN | LOGOUT  -->
<!-- DOCKER VERSION  -->

<!--& DOCKER IMAGES   ---------------------------------------------------------------------------------------------------------------------------------->
<!-- DOCKER RUN {IMAGE__NAME}  -->
<!-- DOCKER PULL  {IMAGE__NAME} -->
<!-- DOCKER IMAGES | IMAGES LIST  -->
<!-- DOCKER IMAGES PRUNE  -->
<!-- DOCKER INSPECT {IMAGE__NAME}  -->

<!--* DOCKER CONTAINER   --------------------------------------------------------------------------------------------------------------------------------->
<!-- DOCKER RUN -IT {CONTAINER__NAME}  -->
<!-- DOCKER PS || DOCKER CONTAINERS LIST || DOCKER PS -A -->
<!-- DOCKER START {CONTAINER__NAME} || DOCKER RESTART {CONTAINER__NAME} -->
<!-- DOCKER STOP || DOCKER STOP -F {CONTAINER__NAME} -->
<!-- DOCKER RM {CONTAINER__NAME} -->
<!-- DOCKER RM -->
<!-- DOCKER RUN --HELP -->
<!-- DOCKER RUN -P {host_port:container_port} (PUBLISH) -->
<!-- DOCKER RUN -V {host_port:container_port} (VOLUME) -->
<!-- DOCKER RUN -ENV {'variable=value'} (ENVIRONMENT VARIABLE) -->
<!-- DOCKER PAUSE {CONTAINER__NAME}-->
<!-- DOCKER UNPAUSE {CONTAINER__NAME}-->
<!-- DOCKER KILL {CONTAINER__NAME}-->
<!-- DOCKER TOP {CONTAINER__NAME}-->
<!-- DOCKER HISTORY {CONTAINER__NAME}-->
<!-- DOCKER DIFF {CONTAINER__NAME}-->
<!-- DOCKER INSPECT {CONTAINER__NAME}-->
<!-- DOCKER ATTACH {CONTAINER__NAME}-->
<!-- DOCKER EXEC -IT {CONTAINER__NAME}-->
<!-- DOCKER CP {FILE__NAME} {PATH} (INSERTING A FILE INTO A RUNNING CONTAINER) --> 
<!-- DOCKER EXPORT {CONTAINER__NAME} --> 

<!--? DOCKER NETWORK   --------------------------------------------------------------------------------------------------------------------------------->
<!--? TYPES  -->
<!-- NONE -->
<!-- HOST -->
<!-- BRIDGE -->
<!-- OVERLAY -->
<!-- IPvLAN -->
<!-- MACvLAN -->
<!--? COMMANDS  --> 
<!-- DOCKER NETWORK LIST -->
<!-- DOCKER NETWORK CREATE --driver {NETWORK__TYPE} {NETWORK__NAME} -->
<!-- DOCKER NETWORK CONNECT {NETWORK__NAME} {CONTAINER__NAME} -->
<!-- DOCKER NETWORK DISCONNECT {NETWORK__NAME}  -->
<!-- DOCKER NETWORK INSPECT {NETWORK__NAME} -->
<!-- DOCKER NETWORK LS -->
<!-- DOCKER NETWORK PRUNE -->
<!-- DOCKER NETWORK RM {NETWORK__NAME} -->

<!--* DOCKER VOLUME   --------------------------------------------------------------------------------------------------------------------------------->
<!-- DOCKER VOLUME CREATE {VOLUME__NAME}  -->
<!-- DOCKER VOLUME INSPECT {VOLUME__NAME} -->
<!-- DOCKER VOLUME LS {VOLUME__NAME} -->
<!-- DOCKER VOLUME PRUNE {VOLUME__NAME} -->
<!-- DOCKER VOLUME RM {VOLUME__NAME} -->
<!-- DOCKER RUN --MOUNT source=<VOLUME__NAME>,destination=<PATH__IN__CONTAINER> <IMAGE__NAME> -->
<!-- DOCKER VOLUME PRUNE-->

<!--^ DOCKER FILE  ----------------------------------------------------------------------------------------------------------------------------------->
<!-- FROM : STARTING DOCKER FILE FROM SPECIFIC IMAGE OR FILE ==> python:3.10-slim-buster -->
<!-- LABEL -->
<!-- COPY -->
<!-- RUN -->
<!-- ADD -->
<!-- WORKDIR -->
<!-- ENTRYPOINT -->
<!-- CMD -->
<!-- ENV -->
<!-- VOLUME -->
<!-- USER -->
<!-- ARG -->
<!-- ONBUILD -->
<!-- STOPSIGNAL -->
<!-- HEALTHCHECK -->
<!-- SHELL -->
<!-- EXPOSE -->
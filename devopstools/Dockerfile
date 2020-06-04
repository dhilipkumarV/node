FROM 017357459259.dkr.ecr.ap-south-1.amazonaws.com/sidecar:v11
ARG env

COPY dockerconfig/${env}/sumocollector.json /etc/sumo-sources.json
COPY dockerconfig/${env}/copy_applogs_s3.sh /custom_script/copy_applogs_s3.sh

CMD ["/usr/bin/supervisord", "-n"]

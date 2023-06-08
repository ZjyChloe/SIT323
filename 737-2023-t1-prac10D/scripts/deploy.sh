#
# Runs Terraform to provision a Kubernetes cluster and deploy microservices to it.
#

set -u # or set -o nounset
: "$VERSION"
: "$ARM_CLIENT_ID"
: "$ARM_CLIENT_SECRET"
: "$ARM_TENANT_ID"
: "$ARM_SUBSCRIPTION_ID"

cd ./scripts
az login
az account set -s "Azure for Students"
terraform init 
terraform apply -auto-approve \
    -var "app_version=$VERSION" \
    -var "client_id=$ARM_CLIENT_ID" \
    -var "client_secret=$ARM_CLIENT_SECRET"

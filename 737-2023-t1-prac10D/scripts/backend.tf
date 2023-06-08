# Sets the "backend" used to store Terraform state.
# This is required to make continous delivery work.

terraform {
        required_version = ">= 0.12.6"

    backend "azurerm" {
        resource_group_name  = "video-terraform"
        storage_account_name = "videoterraform"
        container_name       = "videoterraformstate"
        key                  = "terraform.tfstate"
    }
}
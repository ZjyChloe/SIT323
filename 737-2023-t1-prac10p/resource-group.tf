# Creates a resource group for FlixTube in your Azure account.

resource "azurerm_resource_group" "task10" {
  name     = var.app_name
  location = var.location
}
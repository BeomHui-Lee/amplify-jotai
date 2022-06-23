import { AbilityBuilder, Ability } from "@casl/ability";
import { forEach } from "lodash-es";
import { AUTH, ROLE } from "@constants/common";

export default function defineAbilityFor(user: any) {
  const { can, cannot, rules } = new AbilityBuilder(Ability);

  forEach(user.roles, role => {
    switch (role.rolename) {
      case ROLE.ROLE_ADMIN:
        can("manage", "all");
        break;
      case ROLE.ROLE_STARTUP_MANAGER:
        can("manage", ["Auth", AUTH.USER, AUTH.DASHBOARD, AUTH.CUSTOMER, AUTH.EMPLOYEE, AUTH.COMPANY]);
        can(["create", "read", "update", "delete"], ["design", "estimate"]);
        if (user.companyId === 46 || user.companyId === 1) {
          can(["manage"], ["startup", "hcost", "simestFactor", "simestModel", "startupModel", "startupFactor"]);
        }
        can("read", ["charge", "designPreference", "item"]);
        break;
      case ROLE.ROLE_DESIGN_MANAGER:
        can("manage", [
          "Auth",
          "user",
          "dashboard",
          "customer",
          "design",
          "estimate",
          "designPreference",
          "pestimate",
          "company",
          "item",
          "employee",
        ]);
        if (user.companyId === 46 || user.companyId === 1) {
          can(["read", "create"], ["startup", "hcost"]);
          can("read", ["simestFactor", "simestModel", "startupModel", "startupFactor"]);
        }
        can("read", ["charge"]);
        cannot("pudge", "design");
        break;
      case ROLE.ROLE_MANAGER:
        can("manage", ["Auth", "user", "dashboard", "customer"]);
        can(["create", "read", "update", "delete"], ["design", "estimate"]);
        can("read", ["company", "item", "charge", "employee"]);
        if (user.companyId === 46 || user.companyId === 1) {
          can(["read", "create"], ["startup", "hcost"]);
          can("read", ["simestFactor", "simestModel", "designPreference", "startupModel", "startupFactor"]);
        }
        break;
      case ROLE.ROLE_CUSTOMER:
        cannot("manage", "all");
        can("manage", ["Auth", "user"]);
        break;
      case ROLE.ROLE_ADMIN_DISTRIBUTION:
        can("manage", [
          "Auth",
          "user",
          "dashboard",
          "customer",
          "design",
          "estimate",
          "designPreference",
          "pestimate",
          "company",
          "item",
          "employee",
        ]);
        can("read", ["charge"]);
        cannot("pudge", "design");
        break;
      case ROLE.ROLE_ADMIN_MANUFACTURING:
        can("manage", [
          "Auth",
          "user",
          "dashboard",
          "customer",
          "design",
          "estimate",
          "designPreference",
          "pestimate",
          "company",
          "item",
          "employee",
        ]);
        can("read", ["charge"]);
        cannot("pudge", "design");
        break;
      default:
        cannot("manage", "all");
    }
  });

  return rules;
}

import { SimpleRolesIsAuthorized } from "@blitzjs/auth"
import { User, MembershipRole, GlobalRole, Organization } from "db"

export type Role = MembershipRole | GlobalRole

declare module "@blitzjs/auth" {
  export interface Session {
    isAuthorized: SimpleRolesIsAuthorized<Role>
    PublicData: {
      userId: User["id"]
      roles: Array<Role>
      orgId?: Organization["id"]
    }
  }
}

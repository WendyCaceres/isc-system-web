export interface RolePermissions {
    [name: string]: { id: number; disabled: boolean; permissions: string[] };
}
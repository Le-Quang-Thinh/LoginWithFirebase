import * as type from "../constants/projectConstant";

export function createProject(project) {
    return {
        type: type.CREATE_PROJECT,
        project
    }
}
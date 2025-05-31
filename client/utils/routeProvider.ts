const Base_Url = process.env.NEXT_PUBLIC_BACKEND_URL

export const loginRoute = `${Base_Url}/user/login`
export const projectsRoute = `${Base_Url}/project/all`
export const projectRoute = `${Base_Url}/project`
export const newProjectRoute = `${Base_Url}/project/new`
export const deploymentsRoute = `${Base_Url}/deployment/all`
export const gitReposRoute = `${Base_Url}/project/gitProjects`
export const slugAvailablityRoute = `${Base_Url}/project/checkSlugAvailablity`
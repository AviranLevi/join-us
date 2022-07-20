import Project from '../models/Project'
import logger from '.././../libs/logger'

export const createProject = async (projectData) => {
  try {
    const project = new Project(projectData)
    await project.save()
    return project
  } catch (error) {
    logger.error(`[db/project] - createProject - ${error}`)
    throw error
  }
}

export const getProject = async (id) => {
  try {
    const project = await Project.find({ _id: id })
    return project
  } catch (error) {
    logger.error(`[db/project] - getProject - ${error}`)
    throw error
  }
}
export const getUserProjects = async (userId) => {
  try {
    const projects = await Project.find({ userId })
    return projects
  } catch (error) {
    logger.error(`[db/project] - getUserProjects - ${error}`)
    throw error
  }
}

export const updateProject = async (id, data) => {
  try {
    const project = await Project.findOneAndUpdate(id, data, { new: true })
    return project
  } catch (error) {
    logger.error(`[db/project] - updateProject - ${error}`)
    throw error
  }
}

export const deleteProject = async (id) => {
  try {
    const project = await Project.deleteOne({ _id: id })
    const { deletedCount } = project
    if (deletedCount === 1) {
      return true
    }
    return false
  } catch (error) {
    logger.error(`[db/project] - deleteProject - ${error}`)
    throw error
  }
}

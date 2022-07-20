import User from '../models/User'
import Project from '../models/Project'
import moment from 'moment'
import { dbResponses } from '../constant'
import logger from '.././../libs/logger'

const currentDate = moment().format('MMM Do YYYY')

export const createUser = async (data) => {
  try {
    const { email } = data
    const userExists = await User.findOne({ email })
    if (userExists) {
      return dbResponses.alreadyExists
    } else {
      const user = new User(data)
      user.save()
      logger.info(`New user created - ${user.userName} `)
      return user
    }
  } catch (error) {
    logger.error(`[db/user] - createUser - ${error}`)
    throw error
  }
}

export const getUser = async (id) => {
  try {
    const user = await User.findById(id)
    const projects = await Project.find({ userId: id })
    return { user, projects }
  } catch (error) {
    logger.error(`[db/user] - getUser - ${error}`)
    throw error
  }
}

export const updateUser = async (userId, data) => {
  try {
    const { email } = data
    const emailAlreadyUsed = await User.findOne({ email })

    if (emailAlreadyUsed && emailAlreadyUsed._id.toString() !== userId) {
      return dbResponses.emailAlreadyInUse
    } else if (emailAlreadyUsed) delete data.email

    const newData = Object.assign(data, { updatedAt: currentDate })
    const user = await User.findOneAndUpdate({ _id: userId }, { $set: newData }, { new: true })
    return user
  } catch (error) {
    logger.error(`[db/user] - updateUser - ${error}`)
    throw error
  }
}

export const deleteUser = async (userId) => {
  try {
    const deleteUserProjects = await Project.deleteMany({ userId })
    const userProjectsRemoved = deleteUserProjects.ok

    if (userProjectsRemoved === 1) {
      const user = await User.deleteOne({ _id: userId })
      const { deletedCount } = user
      if (deletedCount === 1) {
        return true
      }
      return false
    }
    return false
  } catch (error) {
    logger.error(`[db/user] - deleteUser - ${error}`)
    throw error
  }
}

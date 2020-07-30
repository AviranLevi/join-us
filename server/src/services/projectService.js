import * as db from '../db/project';
import { getSpotifyTrack } from './api/spotifyAPI';

//CREATE
export const createProject = async (data) => {
  try {
    const { id, spotify } = data;
    if (spotify) {
      const trackData = await getSpotifyTrack(spotify);
      if (trackData) {
        const projectToDB = Object.assign(data, trackData, { userId: id });
        const projectFromDB = await db.createProject(projectToDB);
        return projectFromDB;
      }
      return 'SPOTIFY ID OR URL INVALID';
    }
    return 'SPTOIFY LINK IS REQUIRED';
  } catch (error) {
    throw error;
  }
};

//READ
export const getProject = async (id) => {
  try {
    const projectFromDB = await db
      .getProject(id)
      .then((res) => res)
      .catch((err) => err);
    if (projectFromDB.length) {
      const response = projectFromDB[0];
      return response;
    }
    return [];
  } catch (error) {
    throw error;
  }
};

export const getUserProjects = async (userId) => {
  try {
    const projects = await db.getUserProjects(userId);
    return projects;
  } catch (error) {
    throw error;
  }
};

//UPDATE
export const updateProject = async (id, data) => {
  try {
    const response = await db.updateProject(id, data);
    return response;
  } catch (error) {
    throw error;
  }
};

//DELETE
export const deleteProject = async (id) => {
  try {
    const projectDeleted = await db.deleteProject(id);
    if (projectDeleted) {
      return { deleted: projectDeleted, message: 'Project has been deleted successfully' };
    }
    return { deleted: projectDeleted, message: 'Something was wrong, try again later' };
  } catch (error) {
    throw error;
  }
};

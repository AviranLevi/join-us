import * as db from '../db/projectDB';
import { getSpotifyTrack } from './api/spotifyAPI';

//CREATE
export const createProject = async (urls) => {
  try {
    const { spotify } = urls;
    if (spotify) {
      const trackData = await getSpotifyTrack(spotify);
      if (trackData) {
        const projectToDB = Object.assign(urls, trackData, { userId: 'test' });
        const projectFromDB = await db.createProject(projectToDB);
        projectFromDB.artists = projectFromDB.artists.map((json) => JSON.parse(json));
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
      response.artists = response.artists.map((json) => JSON.parse(json));
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
    const response = await db.deleteProject(id);
    return response;
  } catch (error) {
    throw error;
  }
};

const formatToDB = (data, urls) => {};

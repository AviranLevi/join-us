import Project from '../models/Project';

export const createProject = (data) => {
  try {
    const project = new Project(data);
    return project;
  } catch (error) {
    throw error;
  }
};

export const getProject = (id) => {
  try {
    const project = Project.find({ id });
    return project;
  } catch (error) {
    throw error;
  }
};

export const updateProject = (id, data) => {
  try {
    const project = Project.findOneAndUpdate(id, data);
    return project;
  } catch (error) {
    throw error;
  }
};

export const deleteProject = (id) => {
  try {
    const project = Project.deleteOne(id);
    return project;
  } catch (error) {
    throw error;
  }
};

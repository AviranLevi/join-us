import Project from '../models/Project';

export const createProject = async (projectData) => {
  try {
    const project = new Project(projectData);
    await project.save();
    return project;
  } catch (error) {
    throw error;
  }
};

export const getProject = async (id) => {
  try {
    const project = await Project.find({ _id: id });
    return project;
  } catch (error) {
    throw error;
  }
};

export const updateProject = (id, data) => {
  try {
    const project = Project.findOneAndUpdate(id, data, { new: true });
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

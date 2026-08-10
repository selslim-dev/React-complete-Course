import { ProjectsSideBar } from "./Components/ProjectsSideBar";
import { NewProject } from "./Components/NewProjects";
import { NoProjectsSelected } from "./Components/NoProjectsSelected";
import { useState } from "react";
import { SelectedProject } from "./Components/SelectedProject";
import { NewTask } from "./Components/NewTask";

const App = function () {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  class Functions {
    // Handling projects creation
    handleAddProject = function (projectData) {
      setProjectsState((prevState) => {
        const projectId = Math.random();
        const newProject = {
          ...projectData,
          id: projectId,
        };
        return {
          ...prevState,
          selectedProjectId: undefined,
          projects: [...prevState.projects, newProject],
        };
      });
    };
    handleStartAddProject = function () {
      setProjectsState((prevState) => {
        return {
          ...prevState,
          selectedProjectId: null,
        };
      });
    };
    handleCancelAddProject = function () {
      setProjectsState((prevState) => {
        return {
          ...prevState,
          selectedProjectId: undefined,
        };
      });
    };
    // Handling projects
    handleDeleteProject() {
      setProjectsState((prevState) => {
        return {
          ...prevState,
          selectedProjectId: undefined,
          projects: prevState.projects.filter((project) => {
            return project.id !== prevState.selectedProjectId;
          }),
        };
      });
    }
    handleSelectProject(id) {
      setProjectsState((prevState) => {
        return {
          ...prevState,
          selectedProjectId: id,
        };
      });
    }
    //Handling tasks
    handleAddTask(text) {
      setProjectsState((prevState) => {
        const taskId = Math.random();
        const newTask = {
          text: text,
          projectId: prevState.selectedProjectId,
          id: taskId,
        };
        return {
          ...prevState,
          tasks: [newTask, ...prevState.tasks],
        };
      });
    }
    handleDeleteTask(id) {
      setProjectsState((prevState) => {
        return {
          ...prevState,
          tasks: prevState.tasks.filter((task) => {
            return task.id !== id;
          }),
        };
      });
    }
  }
  const functionsNeed = new Functions();

  const selectedProject = projectsState.projects.find((project) => {
    return project.id === projectsState.selectedProjectId;
  });

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={functionsNeed.handleDeleteProject}
      onAddTask={functionsNeed.handleAddTask}
      onDeleteTask={functionsNeed.handleDeleteTask}
      tasks={projectsState.tasks.filter((task) => {
        return task.projectId === projectsState.selectedProjectId;
      })}
    />
  );
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={functionsNeed.handleAddProject}
        onCancel={functionsNeed.handleCancelAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoProjectsSelected
        onStartAddProject={functionsNeed.handleStartAddProject}
      />
    );
  }

  return (
    <main className="h-screen py-16 flex gap-8">
      <ProjectsSideBar
        onStartAddProject={functionsNeed.handleStartAddProject}
        projects={projectsState.projects}
        onSelect={functionsNeed.handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      ></ProjectsSideBar>
      {content}
    </main>
  );
};

export default App;

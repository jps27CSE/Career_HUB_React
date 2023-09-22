const getStoreData = () => {
  const storedJobApplication = localStorage.getItem("job-applications");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  } else {
    return [];
  }
};

const saveJobApplication = (id) => {
  const storedJobApplications = getStoreData();
  const isExist = storedJobApplications.find((jobID) => jobID === id);

  if (!isExist) {
    storedJobApplications.push(id);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedJobApplications)
    );
  }
};

export { getStoreData, saveJobApplication };

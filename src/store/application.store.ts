let APPLICATION = {} as Application;

export const getApplication = () => APPLICATION;

export const updateApplication = (application: Partial<Application>): void => {
  APPLICATION = {...APPLICATION, ...application};
}

type Application = {
  datetime: string;
}

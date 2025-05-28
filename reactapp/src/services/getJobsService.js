import { api } from ".";

export const getJobs = async () => {
  const res = await api({
    endpoint: "/job-board-api"
  });

  const data = {
    start: res.meta.from,
    last: res.meta.to,
    total: 200,
    cards: res.data.map((item) => {
      return {
        image:
          "https://media.instahyre.com/images/profile/base/employer/18975/518f65c56a/0_4.webp",
        id: item.slug,
        title: item.title,
        location: item.location,
        employees: {
          min: 0,
          max: 100
        },
        createdAt: item.created_at,
        isWFH: item.remote,
        description: item.description,
        tags: item.tags
      };
    })
  };

  return data;
};

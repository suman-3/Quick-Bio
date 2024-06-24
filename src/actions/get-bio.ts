export interface Bio {
  _id: string;
  bio: string;
  createdAt: string;
}

export const getBio = async (): Promise<{ bios: Bio[] }> => {
  try {
    const res = await fetch("/api/bio", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch bio");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading bios", error);
    return { bios: [] };
  }
};

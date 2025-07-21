import z  from "zod";

export const HeroSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  title: z.string().min(1, "Judul wajib diisi"),
  description: z.string().min(1, "Deskripsi wajib diisi"),

  whatsapp: z
    .string()
    .min(1, "Nomor wajib diisi")
    .refine((val) => /^\d+$/.test(val), "Harus berupa angka"),
   

  location: z.string().min(1, "Lokasi wajib diisi"),

  imageUrl  : z
    .any()
    .optional()
    .refine(
      (file) => {
        if (!file) return true;
        return file instanceof FileList && file.length > 0;
      },
      {
        message: "Gambar wajib diunggah",
      }
    ),
});


export type HeroSchemaDTO = {
  name: string;
  title: string;
  description: string;
  whatsapp: string;
  location: string;
  imageUrl?: FileList;
};

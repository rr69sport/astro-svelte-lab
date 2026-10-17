import fs from 'node:fs/promises'

export const getFoldersWithImages = async (path: string) => {
  let folders

  try {
    folders = await fs.readdir(path)
  } catch {
    console.error(`No se ha podido leer el directorio: ${path}`)
    process.exit(1)
  }

  const foundedFolders = folders.map(async (folder) => {
    const folderPath = `${path}/${folder}`
    const images = await fs.readdir(folderPath)
    return images.map((image) => `${folderPath}/${image}`)
  })

  const foundedImages = await Promise.all(foundedFolders)
  return foundedImages
}

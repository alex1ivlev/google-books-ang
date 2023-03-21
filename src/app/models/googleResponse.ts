export interface GoogleResponse{
  items?: BookItem[]
}

export interface BookItem{
  id: string,
  volumeInfo:{
    title: string,
    imageUrl: string,
    description:string
  }

}

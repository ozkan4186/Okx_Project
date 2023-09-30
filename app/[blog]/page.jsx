import React from 'react'

function Blog  ({searchParams}) {
   
    if (searchParams.error==="true") {
        throw new Error("This is an error")
    }

    // Backennde fake bir veri oluşturdum ve backendden bilinmeyen bir hata geldiğinde göstermek için
   
  return (
    <div>Blog Page</div>
  )
}

export default page
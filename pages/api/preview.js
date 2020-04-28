var secret="dineshtest";
export  default async (req, res) => {
  res.statusCode = 200
  // res.setPreviewData({})
  if(req.query.secret !=='dineshtest' || !req.query.slug){
  	return res.status(401).json({message:"Invalid Token"})
  }

res.setPreviewData({})

  	res.writeHead(307, { Location: req.query.slug })

  	res.end()

}


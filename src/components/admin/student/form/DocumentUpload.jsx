import React from 'react'
import { Box, Button } from "@mui/material";
import Image from "next/image";
const DocumentUpload = () => {
  return (
    <Box sx={{ display: "flex", alignContent: "center" ,justifyContent:"space-between"}}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Image
            src={"https://ik.imagekit.io/bbnngj9wy/profile_9pzY19yBe.png"}
            width={100}
            height={100}
          />
          <Button variant="contained" sx={{mt:1}} component="label" size="small">
            Upload Image
            <input type="file" hidden />
          </Button>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Image
            src={"https://ik.imagekit.io/bbnngj9wy/adhar_2oD3aMPB9.png"}
            width={270}
            height={100}
          />
          <Button sx={{mt:1}} variant="contained" component="label" size="small">
            Upload Front Adhar
            <input type="file" hidden />
          </Button>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Image
            src={"https://ik.imagekit.io/bbnngj9wy/adhar_back_3cRy0UgtU.png"}
            width={270}
            height={100}
          />
          <Button sx={{mt:1}} variant="contained" component="label" size="small">
          Upload Front Back
            <input type="file" hidden />
          </Button>
        </Box>
      </Box>
  )
}

export default DocumentUpload
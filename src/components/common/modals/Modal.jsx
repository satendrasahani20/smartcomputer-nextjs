import React from "react";
import { Modal, Fade, Typography } from "@mui/material";
import CrossIcon from "./CrossIcon";
import { Box } from "@mui/system";
import Button from "../buttons/Button";
const CustomModal = ({
  open,
  onClose,
  onCancel,
  title,
  content,
  onDone,
  successBtnTitle = "done",
  width = "60%",
  onDelete = false,
  isSubmitLoading = false,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      closeAfterTransition
    >
      <Fade in={open}>
        <Box className="modal-container" sx={{ width }}>
          <Typography id="modal-title">{title}</Typography>
          <CrossIcon handleClose={onClose} />
          {/* End Header */}

          <Box
            sx={{
              maxHeight: "calc(80vh - 120px)",
              overflow: "auto",
            }}
          >
            {content()}
          </Box>
          {/* Footer */}
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", mt: 2, mr: 1 }}
          >
            {onDone && (
              <Button
              isLoading={isSubmitLoading}
                variant="contained"
                style={{ backgroundColor: "#7b4ee9" }}
                onClick={onDone}
                label={successBtnTitle}
                />
            )}

            {onDelete && (
              <Button
                sx={{ ml: 1 }}
                onClick={onDelete}
                variant="outlined"
                color="error"
                label={"Delete"}
              />
            )}
            <Button
              sx={{ ml: 1 }}
              onClick={onCancel}
              variant="outlined"
              color="error"
              label={"Cancel"}
            />
              
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default CustomModal;

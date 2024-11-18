import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material";

interface ToolModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: () => void;
  toolName: string;
  setToolName: (value: string) => void;
  toolDescription: string;
  setToolDescription: (value: string) => void;
  setProfileFile: (file: File | null) => void;
}

const ToolModal: React.FC<ToolModalProps> = ({
  open,
  onClose,
  onCreate,
  toolName,
  setToolName,
  toolDescription,
  setToolDescription,
  setProfileFile,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Create New Tool</DialogTitle>
      <DialogContent>
        <TextField
          label="Tool Name"
          fullWidth
          value={toolName}
          onChange={(e) => setToolName(e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
        <TextField
          label="Description"
          fullWidth
          multiline
          rows={4}
          value={toolDescription}
          onChange={(e) => setToolDescription(e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
        <Button
          variant="contained"
          component="label"
          sx={{
            backgroundColor: "#722ED1",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#5a1d9b",
            },
            width: "100%",
          }}
        >
          Upload Profile File
          <input
            type="file"
            hidden
            onChange={(e) => setProfileFile(e.target.files[0])}
          />
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onCreate} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ToolModal;

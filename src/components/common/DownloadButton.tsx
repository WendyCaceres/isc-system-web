import React, { useState } from "react";
import { Button, ButtonProps } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { generateDocument } from "../../utils/files";

interface DownloadButtonProps extends ButtonProps {
  url: string;
  data: {
    [key: string]: string | number;
  };
  filename: string;
  buttonText?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  url,
  data,
  filename,
  buttonText = "Descargar",
  ...buttonProps
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await generateDocument(url, data, filename);
    } catch (error) {
      console.error("Error downloading document:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      variant="contained"
      startIcon={<DownloadIcon />}
      disabled={isDownloading}
      {...buttonProps}
    >
      {isDownloading ? "Descargando..." : buttonText}
    </Button>
  );
};

export default DownloadButton;

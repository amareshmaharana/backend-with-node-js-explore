import fs from "fs"

export function logReqRes(filename) {
  return (req, res, next) => {
    fs.appendFile(
      filename,
      `\n${Date.now()}: ${req.method}: ${req.path}`,
      (err, data) => {
        next();
      }
    );
  };
}
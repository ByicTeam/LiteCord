//ipc stuff
import {contextBridge, ipcRenderer} from "electron";
import si from 'systeminformation';


export function disableGPU(): void {

interface GPU {
  vendor: string;
  model: string;
  vram: number;
}

let gpuAMD;
let gpuNVIDIA;
let gpuATI;


(async () => {
  const gpuData = await si.graphics();
  
      const amdGPUFound = gpuData.controllers.some(controller =>
        controller.vendor.toLowerCase().includes('amd')
      );
      const nvidiaGPUFound = gpuData.controllers.some(controller =>
        controller.vendor.toLowerCase().includes('nvidia')
      );
  
      if (amdGPUFound) {
        gpuAMD = true;
        console.log("An AMD GPU controller is present.");
        try {
          if (gpuAMD == true) {
            ipcRenderer.send("DisableGPU")
          }
        } catch(err) {
          throw new Error("Error: "+err)
        }
      } else if(nvidiaGPUFound) {
        gpuNVIDIA = true;
        console.log("An NVIDIA GPU")
        try {
          if (gpuNVIDIA == true) {
            // Nothing :)
          } else {
            ipcRenderer.send("DisableGPU")

          }
        } catch(err) {
          throw new Error("Error: "+err)
        }
        throw new Error("NvIDia doesnt require disableGPU");
      }
})
}

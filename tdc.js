```javascript
const { exec } = require('child_process');
exec('./tdc.sh', (error, stdout, stderr) => {
if (error) {
console.error(Error executing script: ${error.message});
return;
}
if (stderr) {
console.error(Script error: ${stderr});
return;
}
console.log(Script output: ${stdout});
});
```
# Project Commands (TypeScript Server)

This document lists the commands used to create and work with this TypeScript server project located at:

```
C:\Archivos Uni\5 SEMESTRE\TEC SERVIDOR\typecritp
```

## Core Commands Used

- `npm init -y`
- `npm i express dotenv mongoose typescript`
- `npm i -D ts-node nodemon @types/express @types/mongoose swagger-jsdoc swagger-ui-express @types/swagger-jsdoc @types/swagger-ui-express`
- `npx tsc --init`
- `npm run scripts`  (compila con `tsc`)
- `npm run dev`      (desarrollo con `nodemon src/index.ts`)
- `npm start`        (hoy apunta a `node .`)
- `npx ts-node src/index.ts`

## Scripts npm (package.json)

- `dev`: `nodemon src/index.ts`
- `scripts`: `tsc`  (nombre inusual; compila TypeScript)
- `start`: `node .`  (ver nota abajo)

## Sugerencias/Notas

- `start` recomendado: si compilas a `dist/`, usa `node dist/index.js` para producción. Con `node .` y `main: "index.ts"`, Node no ejecutará TypeScript directamente.
- `typescript` normalmente va en `devDependencies`, pero funciona en `dependencies` como está.
- `@types/mongoose` puede ser redundante con Mongoose v8+, pero no estorba.
- `tsconfig.json` usa `module` y `moduleResolution` en `nodenext`, y `outDir: dist`.

## PowerShell: extraer solo tus comandos de este proyecto desde el historial

Crea un listado con los comandos ejecutados cuando estabas dentro de esta carpeta. Genera dos archivos: `commands_used.txt` (cronológico) y `commands_used_unique.txt` (sin duplicados).

```powershell
$target = 'C:\Archivos Uni\5 SEMESTRE\TEC SERVIDOR\typecritp'
$hist   = Get-Content (Get-PSReadLineOption).HistorySavePath
$inTarget = $false
$wanted = '^(npm|npx|node|tsc|ts-node|nodemon|git|mkdir|ni|copy|echo)'

$results = foreach ($line in $hist) {
  if ($line -match '^(\s*)(cd|Set-Location)\s+(.+)$') {
    $raw = $Matches[3].Trim().Trim("'\"")
    $res = Resolve-Path -LiteralPath $raw -ErrorAction SilentlyContinue
    $path = if ($res) { $res.Path } else { $raw }
    $inTarget = $path -like "$target*"
    continue
  }
  if ($inTarget -and ($line -match $wanted)) { $line }
}

$results | Set-Content "$target\\commands_used.txt"
$results | Sort-Object -Unique | Set-Content "$target\\commands_used_unique.txt"
Write-Host "Listo: commands_used.txt y commands_used_unique.txt en $target"
```

## Uso típico

- Desarrollo: `npm run dev`
- Compilar: `npm run scripts` (o `npx tsc`)
- Ejecutar compilado: `node dist/index.js` (si ajustas `start`)


# Get Started

## Install dependencies
Run the following commands in the root directory of this project
```bash
npm install
```

## To run a developer server
```bash
npm run dev
```

## Guide for Pull Requests - (chat gpt response)

Para hacer una pull request en un repositorio de GitHub, sigue estos pasos:

***1. Fork del repositorio***: Ve al repositorio del proyecto en GitHub y haz clic en el botón "Fork" en la esquina superior derecha. Esto creará una copia del repositorio en tu propia cuenta de GitHub.

> *Osea que toca borrar el repo que ya clonaron, para que sigan trabajando sobre su fork*

***2. Clona el repositorio***: Clona tu repositorio forked a tu máquina local usando Git. Puedes hacer esto ejecutando el siguiente comando en tu terminal:

```
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO_forked.git
```

***3. Crea una rama***: Antes de hacer cambios, crea una rama para trabajar en ella. Esto ayuda a mantener tus cambios separados del branch principal (generalmente main o master). Puedes hacerlo con el siguiente comando:

```
git checkout -b rama_para_prs
```

***4. Haz tus cambios***: Realiza los cambios que desees en los archivos del repositorio en tu máquina local.

***5. Agrega y haz commit de tus cambios***: Una vez que hayas realizado tus cambios, agrega los archivos modificados y haz un commit con un mensaje descriptivo:

```
git add .
git commit -m "Descripción breve de tus cambios"
```

***6. Sincroniza con el repositorio original***: Si la rama principal del repositorio original ha cambiado desde que hiciste el fork, es una buena práctica sincronizar tu fork con el repositorio original. Puedes hacerlo añadiendo un remote que apunte al repositorio original y realizando un pull de los cambios:

```
git remote add upstream https://github.com/REPOSITORIO_ORIGINAL.git
git pull upstream main
```

***7. Sube tu rama***: Sube tu rama con los cambios al repositorio en tu cuenta de GitHub:
```
git push origin nombre-de-tu-rama
```
***8. Crea la Pull Request***: Ve a la página de tu repositorio en GitHub. Deberías ver un mensaje indicando que has hecho cambios recientes en tu rama y un botón para crear una nueva pull request. Haz clic en él, completa la descripción de tu pull request y sigue las instrucciones para crearla.

Una vez creada la pull request, los propietarios del repositorio original podrán revisar tus cambios, hacer comentarios y, si todo está bien, fusionar tus cambios en el repositorio principal.
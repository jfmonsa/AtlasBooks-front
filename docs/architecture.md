# Architecture Layers

1. services
2. domain layer
3. ui layer

## Layers

### 1 - Service Layer

TODO: move data mapping / transformation / adapters to service layer
e.g UI should not know about the shape of the data. e.g. should not know about response object

### 2 - Domain

- DTOs to avoid manipulating deepley nested / accesing object's properties inside UI components
- domain model, e.g flattend deeply nested objects to simplify acces in frontend

* making more reasalient against external changes

---

- https://youtu.be/-ojYfV4NSUQ?si=olUVhykCB6Vn-z2k - from react cleaner architecture series

## Resources

1. Playlist for cleaner architecture in React - https://www.youtube.com/playlist?list=PLo6qcHP9e9W7UfMMFhp3SwzE9r4TTxdWU

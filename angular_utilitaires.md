# Méthodes Utilitaires Angular

Angular propose de nombreuses méthodes utilitaires réparties dans ses différents modules et classes. Voici une liste non exhaustive des principales catégories et méthodes utilitaires couramment utilisées :

## 1. Gestion des formulaires (ReactiveFormsModule, FormsModule)
- **FormControl**: `setValue()`, `patchValue()`, `reset()`, `disable()`, `enable()`
- **FormGroup**: `addControl()`, `removeControl()`, `setValue()`, `patchValue()`, `reset()`
- **Validators**: `required`, `minLength()`, `maxLength()`, `pattern()`, `email()`

## 2. Observables (RxJS, utilisé dans Angular)
- `map()`, `filter()`, `debounceTime()`, `switchMap()`, `mergeMap()`, `catchError()`, `tap()`

## 3. Manipulation du DOM (Renderer2)
- `addClass()`, `removeClass()`, `setStyle()`, `removeStyle()`, `listen()`

## 4. Gestion des routes (Router)
- `navigate()`, `navigateByUrl()`, `createUrlTree()`, `isActive()`

## 5. Services HTTP (HttpClient)
- `get()`, `post()`, `put()`, `delete()`, `patch()`, `head()`, `options()`

## 6. Gestion des événements (EventEmitter)
- `emit()`

## 7. Cycles de vie des composants (hooks)
- `ngOnInit()`, `ngOnDestroy()`, `ngAfterViewInit()`, `ngAfterContentInit()`, etc.

## 8. Pipes personnalisés
- `transform()`

---

Cette liste couvre les méthodes utilitaires les plus courantes dans Angular. Si vous souhaitez une liste plus détaillée ou spécifique à un domaine particulier d'Angular, je peux vous la fournir.

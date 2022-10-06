# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHttp <a name="DataHttp" id="@cdktf/provider-http.dataHttp.DataHttp"></a>

Represents a {@link https://www.terraform.io/docs/providers/http/d/http http}.

#### Initializers <a name="Initializers" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer"></a>

```typescript
import { dataHttp } from '@cdktf/provider-http'

new dataHttp.DataHttp(scope: Construct, id: string, config: DataHttpConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-http.dataHttp.DataHttpConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-http.dataHttp.DataHttpConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.resetRequestBody">resetRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.resetRequestHeaders">resetRequestHeaders</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-http.dataHttp.DataHttp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-http.dataHttp.DataHttp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-http.dataHttp.DataHttp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-http.dataHttp.DataHttp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-http.dataHttp.DataHttp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-http.dataHttp.DataHttp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-http.dataHttp.DataHttp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-http.dataHttp.DataHttp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-http.dataHttp.DataHttp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-http.dataHttp.DataHttp.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetRequestBody` <a name="resetRequestBody" id="@cdktf/provider-http.dataHttp.DataHttp.resetRequestBody"></a>

```typescript
public resetRequestBody(): void
```

##### `resetRequestHeaders` <a name="resetRequestHeaders" id="@cdktf/provider-http.dataHttp.DataHttp.resetRequestHeaders"></a>

```typescript
public resetRequestHeaders(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-http.dataHttp.DataHttp.isConstruct"></a>

```typescript
import { dataHttp } from '@cdktf/provider-http'

dataHttp.DataHttp.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-http.dataHttp.DataHttp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.responseBody">responseBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.responseHeaders">responseHeaders</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.requestBodyInput">requestBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.requestHeadersInput">requestHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.requestBody">requestBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.requestHeaders">requestHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-http.dataHttp.DataHttp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-http.dataHttp.DataHttp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-http.dataHttp.DataHttp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-http.dataHttp.DataHttp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-http.dataHttp.DataHttp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-http.dataHttp.DataHttp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-http.dataHttp.DataHttp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-http.dataHttp.DataHttp.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-http.dataHttp.DataHttp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-http.dataHttp.DataHttp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-http.dataHttp.DataHttp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-http.dataHttp.DataHttp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-http.dataHttp.DataHttp.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-http.dataHttp.DataHttp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `responseBody`<sup>Required</sup> <a name="responseBody" id="@cdktf/provider-http.dataHttp.DataHttp.property.responseBody"></a>

```typescript
public readonly responseBody: string;
```

- *Type:* string

---

##### `responseHeaders`<sup>Required</sup> <a name="responseHeaders" id="@cdktf/provider-http.dataHttp.DataHttp.property.responseHeaders"></a>

```typescript
public readonly responseHeaders: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-http.dataHttp.DataHttp.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-http.dataHttp.DataHttp.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `requestBodyInput`<sup>Optional</sup> <a name="requestBodyInput" id="@cdktf/provider-http.dataHttp.DataHttp.property.requestBodyInput"></a>

```typescript
public readonly requestBodyInput: string;
```

- *Type:* string

---

##### `requestHeadersInput`<sup>Optional</sup> <a name="requestHeadersInput" id="@cdktf/provider-http.dataHttp.DataHttp.property.requestHeadersInput"></a>

```typescript
public readonly requestHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-http.dataHttp.DataHttp.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-http.dataHttp.DataHttp.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `requestBody`<sup>Required</sup> <a name="requestBody" id="@cdktf/provider-http.dataHttp.DataHttp.property.requestBody"></a>

```typescript
public readonly requestBody: string;
```

- *Type:* string

---

##### `requestHeaders`<sup>Required</sup> <a name="requestHeaders" id="@cdktf/provider-http.dataHttp.DataHttp.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-http.dataHttp.DataHttp.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-http.dataHttp.DataHttp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### HttpProvider <a name="HttpProvider" id="@cdktf/provider-http.provider.HttpProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/http http}.

#### Initializers <a name="Initializers" id="@cdktf/provider-http.provider.HttpProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-http'

new provider.HttpProvider(scope: Construct, id: string, config?: HttpProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-http.provider.HttpProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-http.provider.HttpProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-http.provider.HttpProvider.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-http.provider.HttpProviderConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-http.provider.HttpProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-http.provider.HttpProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-http.provider.HttpProvider.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-http.provider.HttpProviderConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-http.provider.HttpProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-http.provider.HttpProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.provider.HttpProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-http.provider.HttpProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-http.provider.HttpProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.provider.HttpProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-http.provider.HttpProvider.resetAlias">resetAlias</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-http.provider.HttpProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-http.provider.HttpProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-http.provider.HttpProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-http.provider.HttpProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-http.provider.HttpProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-http.provider.HttpProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-http.provider.HttpProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-http.provider.HttpProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-http.provider.HttpProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-http.provider.HttpProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-http.provider.HttpProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-http.provider.HttpProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-http'

provider.HttpProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-http.provider.HttpProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-http.provider.HttpProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-http.provider.HttpProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.provider.HttpProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.provider.HttpProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.provider.HttpProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.provider.HttpProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.provider.HttpProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.provider.HttpProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.provider.HttpProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.provider.HttpProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-http.provider.HttpProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-http.provider.HttpProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-http.provider.HttpProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-http.provider.HttpProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-http.provider.HttpProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-http.provider.HttpProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-http.provider.HttpProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-http.provider.HttpProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-http.provider.HttpProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-http.provider.HttpProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-http.provider.HttpProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-http.provider.HttpProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHttpConfig <a name="DataHttpConfig" id="@cdktf/provider-http.dataHttp.DataHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-http.dataHttp.DataHttpConfig.Initializer"></a>

```typescript
import { dataHttp } from '@cdktf/provider-http'

const dataHttpConfig: dataHttp.DataHttpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.url">url</a></code> | <code>string</code> | The URL for the request. Supported schemes are `http` and `https`. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.method">method</a></code> | <code>string</code> | The HTTP Method for the request. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.requestBody">requestBody</a></code> | <code>string</code> | The request body as a string. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.requestHeaders">requestHeaders</a></code> | <code>{[ key: string ]: string}</code> | A map of request header field names and values. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL for the request. Supported schemes are `http` and `https`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#url DataHttp#url}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

The HTTP Method for the request.

Allowed methods are a subset of methods defined in [RFC7231](https://datatracker.ietf.org/doc/html/rfc7231#section-4.3) namely, `GET`, `HEAD`, and `POST`. `POST` support is only intended for read-only URLs, such as submitting a search.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#method DataHttp#method}

---

##### `requestBody`<sup>Optional</sup> <a name="requestBody" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.requestBody"></a>

```typescript
public readonly requestBody: string;
```

- *Type:* string

The request body as a string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#request_body DataHttp#request_body}

---

##### `requestHeaders`<sup>Optional</sup> <a name="requestHeaders" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of request header field names and values.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#request_headers DataHttp#request_headers}

---

### HttpProviderConfig <a name="HttpProviderConfig" id="@cdktf/provider-http.provider.HttpProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-http.provider.HttpProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-http'

const httpProviderConfig: provider.HttpProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-http.provider.HttpProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-http.provider.HttpProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http#alias HttpProvider#alias}

---




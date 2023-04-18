# `data_http`

Refer to the Terraform Registory for docs: [`data_http`](https://registry.terraform.io/providers/hashicorp/http/3.2.1/docs/data-sources/http).

# `dataHttp` Submodule <a name="`dataHttp` Submodule" id="@cdktf/provider-http.dataHttp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHttp <a name="DataHttp" id="@cdktf/provider-http.dataHttp.DataHttp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/http/3.2.1/docs/data-sources/http http}.

#### Initializers <a name="Initializers" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-http-go/http/v4/datahttp"

datahttp.NewDataHttp(scope Construct, id *string, config DataHttpConfig) DataHttp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig">DataHttpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-http.dataHttp.DataHttpConfig">DataHttpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.resetCaCertPem">ResetCaCertPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.resetInsecure">ResetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.resetRequestBody">ResetRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.resetRequestHeaders">ResetRequestHeaders</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-http.dataHttp.DataHttp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-http.dataHttp.DataHttp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-http.dataHttp.DataHttp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-http.dataHttp.DataHttp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-http.dataHttp.DataHttp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-http.dataHttp.DataHttp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-http.dataHttp.DataHttp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-http.dataHttp.DataHttp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-http.dataHttp.DataHttp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCaCertPem` <a name="ResetCaCertPem" id="@cdktf/provider-http.dataHttp.DataHttp.resetCaCertPem"></a>

```go
func ResetCaCertPem()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktf/provider-http.dataHttp.DataHttp.resetInsecure"></a>

```go
func ResetInsecure()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-http.dataHttp.DataHttp.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetRequestBody` <a name="ResetRequestBody" id="@cdktf/provider-http.dataHttp.DataHttp.resetRequestBody"></a>

```go
func ResetRequestBody()
```

##### `ResetRequestHeaders` <a name="ResetRequestHeaders" id="@cdktf/provider-http.dataHttp.DataHttp.resetRequestHeaders"></a>

```go
func ResetRequestHeaders()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-http.dataHttp.DataHttp.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-http-go/http/v4/datahttp"

datahttp.DataHttp_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-http.dataHttp.DataHttp.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-http-go/http/v4/datahttp"

datahttp.DataHttp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-http.dataHttp.DataHttp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-http.dataHttp.DataHttp.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-http-go/http/v4/datahttp"

datahttp.DataHttp_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-http.dataHttp.DataHttp.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.responseBody">ResponseBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.responseHeaders">ResponseHeaders</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.statusCode">StatusCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.caCertPemInput">CaCertPemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.insecureInput">InsecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.requestBodyInput">RequestBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.requestHeadersInput">RequestHeadersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.caCertPem">CaCertPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.insecure">Insecure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.requestBody">RequestBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.requestHeaders">RequestHeaders</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.url">Url</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-http.dataHttp.DataHttp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-http.dataHttp.DataHttp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-http.dataHttp.DataHttp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-http.dataHttp.DataHttp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-http.dataHttp.DataHttp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-http.dataHttp.DataHttp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-http.dataHttp.DataHttp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-http.dataHttp.DataHttp.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-http.dataHttp.DataHttp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-http.dataHttp.DataHttp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-http.dataHttp.DataHttp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-http.dataHttp.DataHttp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-http.dataHttp.DataHttp.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-http.dataHttp.DataHttp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResponseBody`<sup>Required</sup> <a name="ResponseBody" id="@cdktf/provider-http.dataHttp.DataHttp.property.responseBody"></a>

```go
func ResponseBody() *string
```

- *Type:* *string

---

##### `ResponseHeaders`<sup>Required</sup> <a name="ResponseHeaders" id="@cdktf/provider-http.dataHttp.DataHttp.property.responseHeaders"></a>

```go
func ResponseHeaders() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-http.dataHttp.DataHttp.property.statusCode"></a>

```go
func StatusCode() *f64
```

- *Type:* *f64

---

##### `CaCertPemInput`<sup>Optional</sup> <a name="CaCertPemInput" id="@cdktf/provider-http.dataHttp.DataHttp.property.caCertPemInput"></a>

```go
func CaCertPemInput() *string
```

- *Type:* *string

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktf/provider-http.dataHttp.DataHttp.property.insecureInput"></a>

```go
func InsecureInput() interface{}
```

- *Type:* interface{}

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-http.dataHttp.DataHttp.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `RequestBodyInput`<sup>Optional</sup> <a name="RequestBodyInput" id="@cdktf/provider-http.dataHttp.DataHttp.property.requestBodyInput"></a>

```go
func RequestBodyInput() *string
```

- *Type:* *string

---

##### `RequestHeadersInput`<sup>Optional</sup> <a name="RequestHeadersInput" id="@cdktf/provider-http.dataHttp.DataHttp.property.requestHeadersInput"></a>

```go
func RequestHeadersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-http.dataHttp.DataHttp.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `CaCertPem`<sup>Required</sup> <a name="CaCertPem" id="@cdktf/provider-http.dataHttp.DataHttp.property.caCertPem"></a>

```go
func CaCertPem() *string
```

- *Type:* *string

---

##### `Insecure`<sup>Required</sup> <a name="Insecure" id="@cdktf/provider-http.dataHttp.DataHttp.property.insecure"></a>

```go
func Insecure() interface{}
```

- *Type:* interface{}

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-http.dataHttp.DataHttp.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `RequestBody`<sup>Required</sup> <a name="RequestBody" id="@cdktf/provider-http.dataHttp.DataHttp.property.requestBody"></a>

```go
func RequestBody() *string
```

- *Type:* *string

---

##### `RequestHeaders`<sup>Required</sup> <a name="RequestHeaders" id="@cdktf/provider-http.dataHttp.DataHttp.property.requestHeaders"></a>

```go
func RequestHeaders() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-http.dataHttp.DataHttp.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-http.dataHttp.DataHttp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHttpConfig <a name="DataHttpConfig" id="@cdktf/provider-http.dataHttp.DataHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-http.dataHttp.DataHttpConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-http-go/http/v4/datahttp"

&datahttp.DataHttpConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Url: *string,
	CaCertPem: *string,
	Insecure: interface{},
	Method: *string,
	RequestBody: *string,
	RequestHeaders: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.url">Url</a></code> | <code>*string</code> | The URL for the request. Supported schemes are `http` and `https`. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.caCertPem">CaCertPem</a></code> | <code>*string</code> | Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.insecure">Insecure</a></code> | <code>interface{}</code> | Disables verification of the server's certificate chain and hostname. Defaults to `false`. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.method">Method</a></code> | <code>*string</code> | The HTTP Method for the request. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.requestBody">RequestBody</a></code> | <code>*string</code> | The request body as a string. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.requestHeaders">RequestHeaders</a></code> | <code>*map[string]*string</code> | A map of request header field names and values. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

The URL for the request. Supported schemes are `http` and `https`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.2.1/docs/data-sources/http#url DataHttp#url}

---

##### `CaCertPem`<sup>Optional</sup> <a name="CaCertPem" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.caCertPem"></a>

```go
CaCertPem *string
```

- *Type:* *string

Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.2.1/docs/data-sources/http#ca_cert_pem DataHttp#ca_cert_pem}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.insecure"></a>

```go
Insecure interface{}
```

- *Type:* interface{}

Disables verification of the server's certificate chain and hostname. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.2.1/docs/data-sources/http#insecure DataHttp#insecure}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.method"></a>

```go
Method *string
```

- *Type:* *string

The HTTP Method for the request.

Allowed methods are a subset of methods defined in [RFC7231](https://datatracker.ietf.org/doc/html/rfc7231#section-4.3) namely, `GET`, `HEAD`, and `POST`. `POST` support is only intended for read-only URLs, such as submitting a search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.2.1/docs/data-sources/http#method DataHttp#method}

---

##### `RequestBody`<sup>Optional</sup> <a name="RequestBody" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.requestBody"></a>

```go
RequestBody *string
```

- *Type:* *string

The request body as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.2.1/docs/data-sources/http#request_body DataHttp#request_body}

---

##### `RequestHeaders`<sup>Optional</sup> <a name="RequestHeaders" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.requestHeaders"></a>

```go
RequestHeaders *map[string]*string
```

- *Type:* *map[string]*string

A map of request header field names and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/http/3.2.1/docs/data-sources/http#request_headers DataHttp#request_headers}

---




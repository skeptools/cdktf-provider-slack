# `dataSlackUser` Submodule <a name="`dataSlackUser` Submodule" id="@skeptools/provider-slack.dataSlackUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSlackUser <a name="DataSlackUser" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack/d/user slack_user}.

#### Initializers <a name="Initializers" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer"></a>

```go
import "github.com/skeptools/cdktf-provider-slack-go/slack/dataslackuser"

dataslackuser.NewDataSlackUser(scope Construct, id *string, config DataSlackUserConfig) DataSlackUser
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.config">config</a></code> | <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig">DataSlackUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig">DataSlackUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |

---

##### `IsConstruct` <a name="IsConstruct" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.isConstruct"></a>

```go
import "github.com/skeptools/cdktf-provider-slack-go/slack/dataslackuser"

dataslackuser.DataSlackUser_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.has2Fa">Has2Fa</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.isAdmin">IsAdmin</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.isBot">IsBot</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.isOwner">IsOwner</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.realName">RealName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryTypeInput">QueryTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryValueInput">QueryValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryType">QueryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryValue">QueryValue</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Has2Fa`<sup>Required</sup> <a name="Has2Fa" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.has2Fa"></a>

```go
func Has2Fa() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsAdmin`<sup>Required</sup> <a name="IsAdmin" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.isAdmin"></a>

```go
func IsAdmin() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsBot`<sup>Required</sup> <a name="IsBot" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.isBot"></a>

```go
func IsBot() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsOwner`<sup>Required</sup> <a name="IsOwner" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.isOwner"></a>

```go
func IsOwner() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RealName`<sup>Required</sup> <a name="RealName" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.realName"></a>

```go
func RealName() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `QueryTypeInput`<sup>Optional</sup> <a name="QueryTypeInput" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryTypeInput"></a>

```go
func QueryTypeInput() *string
```

- *Type:* *string

---

##### `QueryValueInput`<sup>Optional</sup> <a name="QueryValueInput" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryValueInput"></a>

```go
func QueryValueInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `QueryType`<sup>Required</sup> <a name="QueryType" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryType"></a>

```go
func QueryType() *string
```

- *Type:* *string

---

##### `QueryValue`<sup>Required</sup> <a name="QueryValue" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.queryValue"></a>

```go
func QueryValue() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@skeptools/provider-slack.dataSlackUser.DataSlackUser.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSlackUserConfig <a name="DataSlackUserConfig" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.Initializer"></a>

```go
import "github.com/skeptools/cdktf-provider-slack-go/slack/dataslackuser"

&dataslackuser.DataSlackUserConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	QueryType: *string,
	QueryValue: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.queryType">QueryType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#query_type DataSlackUser#query_type}. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.queryValue">QueryValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#query_value DataSlackUser#query_value}. |
| <code><a href="#@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#id DataSlackUser#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `QueryType`<sup>Required</sup> <a name="QueryType" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.queryType"></a>

```go
QueryType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#query_type DataSlackUser#query_type}.

---

##### `QueryValue`<sup>Required</sup> <a name="QueryValue" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.queryValue"></a>

```go
QueryValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#query_value DataSlackUser#query_value}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@skeptools/provider-slack.dataSlackUser.DataSlackUserConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/user#id DataSlackUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




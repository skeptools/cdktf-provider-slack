# `provider` Submodule <a name="`provider` Submodule" id="@skeptools/provider-slack.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SlackProvider <a name="SlackProvider" id="@skeptools/provider-slack.provider.SlackProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack slack}.

#### Initializers <a name="Initializers" id="@skeptools/provider-slack.provider.SlackProvider.Initializer"></a>

```go
import "github.com/skeptools/cdktf-provider-slack-go/slack/provider"

provider.NewSlackProvider(scope Construct, id *string, config SlackProviderConfig) SlackProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@skeptools/provider-slack.provider.SlackProviderConfig">SlackProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-slack.provider.SlackProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-slack.provider.SlackProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@skeptools/provider-slack.provider.SlackProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-slack.provider.SlackProviderConfig">SlackProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.resetAlias">ResetAlias</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@skeptools/provider-slack.provider.SlackProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@skeptools/provider-slack.provider.SlackProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-slack.provider.SlackProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-slack.provider.SlackProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@skeptools/provider-slack.provider.SlackProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-slack.provider.SlackProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@skeptools/provider-slack.provider.SlackProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@skeptools/provider-slack.provider.SlackProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@skeptools/provider-slack.provider.SlackProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@skeptools/provider-slack.provider.SlackProvider.resetAlias"></a>

```go
func ResetAlias()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |

---

##### `IsConstruct` <a name="IsConstruct" id="@skeptools/provider-slack.provider.SlackProvider.isConstruct"></a>

```go
import "github.com/skeptools/cdktf-provider-slack-go/slack/provider"

provider.SlackProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-slack.provider.SlackProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.token">Token</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@skeptools/provider-slack.provider.SlackProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@skeptools/provider-slack.provider.SlackProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-slack.provider.SlackProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@skeptools/provider-slack.provider.SlackProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@skeptools/provider-slack.provider.SlackProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@skeptools/provider-slack.provider.SlackProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@skeptools/provider-slack.provider.SlackProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@skeptools/provider-slack.provider.SlackProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@skeptools/provider-slack.provider.SlackProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@skeptools/provider-slack.provider.SlackProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@skeptools/provider-slack.provider.SlackProvider.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@skeptools/provider-slack.provider.SlackProvider.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@skeptools/provider-slack.provider.SlackProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SlackProviderConfig <a name="SlackProviderConfig" id="@skeptools/provider-slack.provider.SlackProviderConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-slack.provider.SlackProviderConfig.Initializer"></a>

```go
import "github.com/skeptools/cdktf-provider-slack-go/slack/provider"

&provider.SlackProviderConfig {
	Token: *string,
	Alias: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.provider.SlackProviderConfig.property.token">Token</a></code> | <code>*string</code> | The OAuth token used to connect to Slack. |
| <code><a href="#@skeptools/provider-slack.provider.SlackProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |

---

##### `Token`<sup>Required</sup> <a name="Token" id="@skeptools/provider-slack.provider.SlackProviderConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

The OAuth token used to connect to Slack.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack#token SlackProvider#token}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@skeptools/provider-slack.provider.SlackProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack#alias SlackProvider#alias}

---




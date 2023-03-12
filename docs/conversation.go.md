# `conversation` Submodule <a name="`conversation` Submodule" id="@skeptools/provider-slack.conversation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Conversation <a name="Conversation" id="@skeptools/provider-slack.conversation.Conversation"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack/r/conversation slack_conversation}.

#### Initializers <a name="Initializers" id="@skeptools/provider-slack.conversation.Conversation.Initializer"></a>

```go
import "github.com/skeptools/cdktf-provider-slack-go/slack/conversation"

conversation.NewConversation(scope Construct, id *string, config ConversationConfig) Conversation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.config">config</a></code> | <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig">ConversationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@skeptools/provider-slack.conversation.Conversation.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-slack.conversation.ConversationConfig">ConversationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.resetIsArchived">ResetIsArchived</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.resetPurpose">ResetPurpose</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.resetTopic">ResetTopic</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@skeptools/provider-slack.conversation.Conversation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@skeptools/provider-slack.conversation.Conversation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-slack.conversation.Conversation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-slack.conversation.Conversation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@skeptools/provider-slack.conversation.Conversation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@skeptools/provider-slack.conversation.Conversation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@skeptools/provider-slack.conversation.Conversation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@skeptools/provider-slack.conversation.Conversation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@skeptools/provider-slack.conversation.Conversation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-slack.conversation.Conversation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-slack.conversation.Conversation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-slack.conversation.Conversation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-slack.conversation.Conversation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-slack.conversation.Conversation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-slack.conversation.Conversation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-slack.conversation.Conversation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@skeptools/provider-slack.conversation.Conversation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@skeptools/provider-slack.conversation.Conversation.resetId"></a>

```go
func ResetId()
```

##### `ResetIsArchived` <a name="ResetIsArchived" id="@skeptools/provider-slack.conversation.Conversation.resetIsArchived"></a>

```go
func ResetIsArchived()
```

##### `ResetPurpose` <a name="ResetPurpose" id="@skeptools/provider-slack.conversation.Conversation.resetPurpose"></a>

```go
func ResetPurpose()
```

##### `ResetTopic` <a name="ResetTopic" id="@skeptools/provider-slack.conversation.Conversation.resetTopic"></a>

```go
func ResetTopic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |

---

##### `IsConstruct` <a name="IsConstruct" id="@skeptools/provider-slack.conversation.Conversation.isConstruct"></a>

```go
import "github.com/skeptools/cdktf-provider-slack-go/slack/conversation"

conversation.Conversation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-slack.conversation.Conversation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.created">Created</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isExtShared">IsExtShared</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isOrgShared">IsOrgShared</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isShared">IsShared</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.actionOnDestroyInput">ActionOnDestroyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isArchivedInput">IsArchivedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isPrivateInput">IsPrivateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.purposeInput">PurposeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.topicInput">TopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.actionOnDestroy">ActionOnDestroy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isArchived">IsArchived</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.isPrivate">IsPrivate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.purpose">Purpose</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@skeptools/provider-slack.conversation.Conversation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@skeptools/provider-slack.conversation.Conversation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-slack.conversation.Conversation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@skeptools/provider-slack.conversation.Conversation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@skeptools/provider-slack.conversation.Conversation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@skeptools/provider-slack.conversation.Conversation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@skeptools/provider-slack.conversation.Conversation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-slack.conversation.Conversation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-slack.conversation.Conversation.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-slack.conversation.Conversation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-slack.conversation.Conversation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-slack.conversation.Conversation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-slack.conversation.Conversation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-slack.conversation.Conversation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Created`<sup>Required</sup> <a name="Created" id="@skeptools/provider-slack.conversation.Conversation.property.created"></a>

```go
func Created() *f64
```

- *Type:* *f64

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@skeptools/provider-slack.conversation.Conversation.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `IsExtShared`<sup>Required</sup> <a name="IsExtShared" id="@skeptools/provider-slack.conversation.Conversation.property.isExtShared"></a>

```go
func IsExtShared() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsOrgShared`<sup>Required</sup> <a name="IsOrgShared" id="@skeptools/provider-slack.conversation.Conversation.property.isOrgShared"></a>

```go
func IsOrgShared() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsShared`<sup>Required</sup> <a name="IsShared" id="@skeptools/provider-slack.conversation.Conversation.property.isShared"></a>

```go
func IsShared() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ActionOnDestroyInput`<sup>Optional</sup> <a name="ActionOnDestroyInput" id="@skeptools/provider-slack.conversation.Conversation.property.actionOnDestroyInput"></a>

```go
func ActionOnDestroyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@skeptools/provider-slack.conversation.Conversation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsArchivedInput`<sup>Optional</sup> <a name="IsArchivedInput" id="@skeptools/provider-slack.conversation.Conversation.property.isArchivedInput"></a>

```go
func IsArchivedInput() interface{}
```

- *Type:* interface{}

---

##### `IsPrivateInput`<sup>Optional</sup> <a name="IsPrivateInput" id="@skeptools/provider-slack.conversation.Conversation.property.isPrivateInput"></a>

```go
func IsPrivateInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@skeptools/provider-slack.conversation.Conversation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PurposeInput`<sup>Optional</sup> <a name="PurposeInput" id="@skeptools/provider-slack.conversation.Conversation.property.purposeInput"></a>

```go
func PurposeInput() *string
```

- *Type:* *string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@skeptools/provider-slack.conversation.Conversation.property.topicInput"></a>

```go
func TopicInput() *string
```

- *Type:* *string

---

##### `ActionOnDestroy`<sup>Required</sup> <a name="ActionOnDestroy" id="@skeptools/provider-slack.conversation.Conversation.property.actionOnDestroy"></a>

```go
func ActionOnDestroy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-slack.conversation.Conversation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsArchived`<sup>Required</sup> <a name="IsArchived" id="@skeptools/provider-slack.conversation.Conversation.property.isArchived"></a>

```go
func IsArchived() interface{}
```

- *Type:* interface{}

---

##### `IsPrivate`<sup>Required</sup> <a name="IsPrivate" id="@skeptools/provider-slack.conversation.Conversation.property.isPrivate"></a>

```go
func IsPrivate() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@skeptools/provider-slack.conversation.Conversation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@skeptools/provider-slack.conversation.Conversation.property.purpose"></a>

```go
func Purpose() *string
```

- *Type:* *string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@skeptools/provider-slack.conversation.Conversation.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.Conversation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@skeptools/provider-slack.conversation.Conversation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConversationConfig <a name="ConversationConfig" id="@skeptools/provider-slack.conversation.ConversationConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-slack.conversation.ConversationConfig.Initializer"></a>

```go
import "github.com/skeptools/cdktf-provider-slack-go/slack/conversation"

&conversation.ConversationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ActionOnDestroy: *string,
	IsPrivate: interface{},
	Name: *string,
	Id: *string,
	IsArchived: interface{},
	Purpose: *string,
	Topic: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.actionOnDestroy">ActionOnDestroy</a></code> | <code>*string</code> | Either of none or archive. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.isPrivate">IsPrivate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_private Conversation#is_private}. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#name Conversation#name}. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#id Conversation#id}. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.isArchived">IsArchived</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_archived Conversation#is_archived}. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.purpose">Purpose</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#purpose Conversation#purpose}. |
| <code><a href="#@skeptools/provider-slack.conversation.ConversationConfig.property.topic">Topic</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#topic Conversation#topic}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-slack.conversation.ConversationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-slack.conversation.ConversationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-slack.conversation.ConversationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-slack.conversation.ConversationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-slack.conversation.ConversationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-slack.conversation.ConversationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-slack.conversation.ConversationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionOnDestroy`<sup>Required</sup> <a name="ActionOnDestroy" id="@skeptools/provider-slack.conversation.ConversationConfig.property.actionOnDestroy"></a>

```go
ActionOnDestroy *string
```

- *Type:* *string

Either of none or archive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#action_on_destroy Conversation#action_on_destroy}

---

##### `IsPrivate`<sup>Required</sup> <a name="IsPrivate" id="@skeptools/provider-slack.conversation.ConversationConfig.property.isPrivate"></a>

```go
IsPrivate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_private Conversation#is_private}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@skeptools/provider-slack.conversation.ConversationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#name Conversation#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@skeptools/provider-slack.conversation.ConversationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#id Conversation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsArchived`<sup>Optional</sup> <a name="IsArchived" id="@skeptools/provider-slack.conversation.ConversationConfig.property.isArchived"></a>

```go
IsArchived interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#is_archived Conversation#is_archived}.

---

##### `Purpose`<sup>Optional</sup> <a name="Purpose" id="@skeptools/provider-slack.conversation.ConversationConfig.property.purpose"></a>

```go
Purpose *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#purpose Conversation#purpose}.

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@skeptools/provider-slack.conversation.ConversationConfig.property.topic"></a>

```go
Topic *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/conversation#topic Conversation#topic}.

---




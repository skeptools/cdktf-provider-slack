# `dataSlackConversation` Submodule <a name="`dataSlackConversation` Submodule" id="@skeptools/provider-slack.dataSlackConversation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSlackConversation <a name="DataSlackConversation" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack/d/conversation slack_conversation}.

#### Initializers <a name="Initializers" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer"></a>

```python
from skeptools_cdktf_provider_slack import data_slack_conversation

dataSlackConversation.DataSlackConversation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  channel_id: str,
  id: str = None,
  purpose: str = None,
  topic: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.channelId">channel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#channel_id DataSlackConversation#channel_id}. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#id DataSlackConversation#id}. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.purpose">purpose</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#purpose DataSlackConversation#purpose}. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.topic">topic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#topic DataSlackConversation#topic}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.channelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#channel_id DataSlackConversation#channel_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#id DataSlackConversation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.purpose"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#purpose DataSlackConversation#purpose}.

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.Initializer.parameter.topic"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#topic DataSlackConversation#topic}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetPurpose">reset_purpose</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetTopic">reset_topic</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_purpose` <a name="reset_purpose" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetPurpose"></a>

```python
def reset_purpose() -> None
```

##### `reset_topic` <a name="reset_topic" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.resetTopic"></a>

```python
def reset_topic() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |

---

##### `is_construct` <a name="is_construct" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.isConstruct"></a>

```python
from skeptools_cdktf_provider_slack import data_slack_conversation

dataSlackConversation.DataSlackConversation.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.created">created</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isArchived">is_archived</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isExtShared">is_ext_shared</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isOrgShared">is_org_shared</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isPrivate">is_private</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isShared">is_shared</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.channelIdInput">channel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.purposeInput">purpose_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.channelId">channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.purpose">purpose</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.topic">topic</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created`<sup>Required</sup> <a name="created" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.created"></a>

```python
created: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `creator`<sup>Required</sup> <a name="creator" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `is_archived`<sup>Required</sup> <a name="is_archived" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isArchived"></a>

```python
is_archived: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_ext_shared`<sup>Required</sup> <a name="is_ext_shared" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isExtShared"></a>

```python
is_ext_shared: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_org_shared`<sup>Required</sup> <a name="is_org_shared" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isOrgShared"></a>

```python
is_org_shared: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_private`<sup>Required</sup> <a name="is_private" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isPrivate"></a>

```python
is_private: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_shared`<sup>Required</sup> <a name="is_shared" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.isShared"></a>

```python
is_shared: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `channel_id_input`<sup>Optional</sup> <a name="channel_id_input" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.channelIdInput"></a>

```python
channel_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `purpose_input`<sup>Optional</sup> <a name="purpose_input" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.purposeInput"></a>

```python
purpose_input: str
```

- *Type:* str

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.purpose"></a>

```python
purpose: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSlackConversationConfig <a name="DataSlackConversationConfig" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.Initializer"></a>

```python
from skeptools_cdktf_provider_slack import data_slack_conversation

dataSlackConversation.DataSlackConversationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  channel_id: str,
  id: str = None,
  purpose: str = None,
  topic: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.channelId">channel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#channel_id DataSlackConversation#channel_id}. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#id DataSlackConversation#id}. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.purpose">purpose</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#purpose DataSlackConversation#purpose}. |
| <code><a href="#@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.topic">topic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#topic DataSlackConversation#topic}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#channel_id DataSlackConversation#channel_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#id DataSlackConversation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.purpose"></a>

```python
purpose: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#purpose DataSlackConversation#purpose}.

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@skeptools/provider-slack.dataSlackConversation.DataSlackConversationConfig.property.topic"></a>

```python
topic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/conversation#topic DataSlackConversation#topic}.

---



